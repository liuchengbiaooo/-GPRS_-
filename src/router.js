import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/aboutUsTwo' },
        {
            path: '/getCommission',
            name: 'GetCommission',
            component: () =>
                import ( /* webpackChunkName: "GetCommission" */ './views/GetCommission/GetCommission.vue'),
        },
        {
            path: '/myWallet',
            name: 'MyWallet',
            component: () =>
                import ( /* webpackChunkName: "MyWallet" */ './views/MyWallet/MyWallet.vue'),
        },
        {
            path: '/problemComplaint',
            name: 'ProblemComplaint',
            component: () =>
                import ( /* webpackChunkName: "ProblemComplaint" */ './views/ProblemComplaint/ProblemComplaint.vue'),
        },
        {
            path: '/rechargeTwo',
            name: 'rechargeTwo',
            component: () =>
                import ( /* webpackChunkName: "ProblemComplaint" */ './views/rechargeTwo/rechargeTwo.vue'),
        },
        {
            path: '/everyday',
            name: 'everyday',
            component: () =>
                import ( /* webpackChunkName: "ProblemComplaint" */ './views/everyday/everyday.vue'),
        },
        {
            path: '/commonProblems',
            name: 'CommonProblems',
            component: () =>
                import ( /* webpackChunkName: "CommonProblems" */ './views/CommonProblems/CommonProblems.vue'),
        },
        {
            path: '/aboutUs',
            name: 'AboutUs',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/AboutUs/AboutUs.vue'),
        },
        {
            path: '/aboutUsTwo',
            name: 'aboutUsTwo',
            component: () =>
                import ( /* webpackChunkName: "AboutUs" */ './views/AboutUsTwo/index.vue'),
        },
        {
            path: '/usingRecord',
            name: 'UsingRecord',
            component: () =>
                import ( /* webpackChunkName: "UsingRecord" */ './views/UsingRecord/UsingRecord.vue'),
        },
        {
            path: '/changeTemplate',
            name: 'ChangeTemplate',
            component: () =>
                import ( /* webpackChunkName: "ChangeTemplate" */ './views/ChangeTemplate/ChangeTemplate.vue'),
        },
        {
            path: '/selectedNum',
            name: 'SelectedNum',
            component: () =>
                import ( /* webpackChunkName: "SelectedNum" */ './views/SelectedNum/SelectedNum.vue'),
        },
        {
            path: '/bindingPhone',
            name: 'BindingPhone',
            component: () =>
                import ( /* webpackChunkName: "BindingPhone" */ './views/BindingPhone/BindingPhone.vue'),
        },
        {
            path: '/Payfess',
            name: 'Payfess',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Payfess/Payfess.vue'),
        },
        {
            path: '/recharge',
            name: 'Recharge',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Recharge/Recharge.vue'),
        },
        {
            path: '/app',
            name: 'App',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Apps/App.vue'),
        },
        {
            path: '/app2',
            name: 'App2',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Apps2/App2.vue'),
        },
        {
            path: '/userType',
            name: 'UserType',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/UserType/UserType.vue'),
        },
        {
            path: '/password',
            name: 'Password',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Password/Password.vue'),
        },
        {
            path: '/wallets',
            name: 'Wallet',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Wallet/Wallet.vue'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Register/Register.vue'),
        },
        {
            path: '/password2',
            name: 'Password2',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Password2/Password2.vue'),
        },
        {
            path: '/succeed',
            name: 'Succeed',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/Succeed/Succeed.vue'),
        },
        {
            path: '/payment',
            name: 'Payment',
            component: () =>
                import ( /* webpackChunkName: "DIYAdvertising" */ './views/payment/payment.vue'),
        }
    ],
});