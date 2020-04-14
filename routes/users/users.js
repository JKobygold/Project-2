//
// Users Routes for login and register
//

// Bring in express
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const db = require("../models");

var firebase = require('firebase');
var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());


// User Login Page Route
router.get("/login", (req, res) => {
	res.render("users/login");
});

// User Logout Route
router.get("/logout", (req, res) => {
	req.logout();
	req.flash("success_msg", "You are logged out now");
	res.redirect("/");
});

// User Login Form Post Route
router.post("/login", (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/users/index",
		failureRedirect: "/users/login",
		failureFlash: true
	})(req, res, next);
});

// User Register Page Route
router.get("/register", (req, res) => {
	res.render("users/register");
});

// User Register Form Post Route
router.post("/register", (req, res, next) => {
	let errors = [];

	if (validatePassword(req, errors)) {
		// Check if the email address is already registered
		db.User.findOne({
				where: {
					email: req.body.email
				}
			})
			.then(user => {
				if (user) {
					req.flash("error_msg", "A user with the same email address already exists");
				} else {
					const newUser = {
						name: req.body.name,
						email: req.body.email,
						password: req.body.password
					};

					bcrypt.genSalt(10, (err, salt) => {
						bcrypt.hash(newUser.password, salt, (err, hash) => {
							if (err) throw err;

							newUser.password = hash;
							db.User.create(newUser)
								.then(user => {
									req.flash("success_msg", "You are registered successfully");
									// auto-login
									req.login(user, err => {
										return next(err);
									});
									res.redirect("/users/" + user.id);
								})
								.catch(error => {
									req.flash("error_msg", "Unable to register: " + error);
									return;
								});
						});
					});
				}
			});
	} else {
		// Send the info back so that the form doesn't clear the info
		res.render("users/register", {
			errors: errors,
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			password2: req.body.password2
		});
	}
});

//
// Validate the input password
//
// PARAMS:
// * req: a reference to the route request object
// * errors: an array buffer for error messages
//
// RETURN:
// * true, if the input password is valid 
// * false, otherwise
//
function validatePassword(req, errors) {
	// Verify "Password" === "Confirm Password"
	if (req.body.password !== req.body.password2) {
		errors.push({
			text: "Passwords do not match"
		});
	}

	// Ensure password is at least 6 characters long
	if (req.body.password.length < 6) {
		errors.push({
			text: "Passwords must be at least 6 characters long"
		});
	}

	return (errors.length === 0);
}

module.exports = router;