import * as riot from 'riot';
import route from 'riot-route'
import $ from 'jquery';
// import bootstrap from 'bootstrap';
import semantic from 'semantic-ui';
import swal from 'sweetalert';
import NProgress from 'nprogress';

import 'tags/app.tag!';
import 'tags/main.tag!';
import 'tags/home.tag!';

// import 'styles/style.less!';

$.ajaxSetup({
	error: (x, status, error) => {
		if (x.status == 403) {
			// window.location.href = 'login';
			route('login');
		}
	}
});

let authorized = false;

let state = riot.observable({
	authorized: authorized
});
state.on('login', () => {
	state.authorized = true;
});

//route.base('');

let subRoute;
subRoute = route.create();
subRoute((...args) => {
	if (args[0] != 'login' && !state.authorized) {
		route('login');
	}
	NProgress.start();
});

subRoute = route.create();
subRoute('login..', () => {
	riot.mount('#page', 'login', {state: state});
	NProgress.done();
});
subRoute('logout', () => {
	$.get('logout', () => {
		route('login');
	});
});

subRoute((...args) => {
	riot.mount('#page', 'main');
});

subRoute = route.create();
subRoute('', () => {
	riot.mount('#content', 'home');
	NProgress.done();
});

riot.mixin({route: route});
riot.mixin({swal: swal});
riot.mount('app', {state: state});
route.start(true);



