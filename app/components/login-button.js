import Ember from 'ember';

export default Ember.Component.extend({
	session : Ember.inject.service ('session'),
	actions: {
		login() {
			this.get ('session').authenticate ('authenticator:torii', 'google-oauth2');
		}
	}
});
