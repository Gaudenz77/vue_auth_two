import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebaseConfig";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Protected from "../views/Protected.vue";
import MyLibrary from "../views/MyLibrary.vue";  // Import MyLibrary component
import MyProfile from "../views/MyProfile.vue";  // Import MyProfile component

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/protected", component: Protected, meta: { requiresAuth: true } },
  { path: "/mylibrary", component: MyLibrary, meta: { requiresAuth: true } },  // Add route for MyLibrary
  { path: "/myprofile", component: MyProfile, meta: { requiresAuth: true } },  // Add route for MyProfile
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  // Check if the route requires authentication and if the user is not logged in
  if (to.matched.some((record) => record.meta.requiresAuth) && !currentUser) {
    next("/login");  // Redirect to login if the user is not authenticated
  } else {
    next();  // Proceed to the route if authentication is not required or user is logged in
  }
});

export default router;
