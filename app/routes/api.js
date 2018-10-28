	router.post('/authenticate', function(req,res) {
		User.findOne({username: req.body.username}).select('email username password').exec(function(err,user){
			if(err) throw err;

			if(!user) {
				res.json({ success: false, message: 'Could not authenticate user' });
			} else if (user) {
				if (req.body.password) {
					var validPassword = user.comparePassword(req.body.password);
				} else {
					res.json({ success: false, message: 'No password provided'});
				}
				if (!validPassword) {
					res.json({ success: false, message: 'Could not authenticate password'});
				} else {
					res.json({ success: true, message: 'User authenticated!' });
				  }
			}
		});
	});
	return router;
}



