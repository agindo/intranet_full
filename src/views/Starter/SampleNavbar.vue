<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top navbar-expand"
    :class="{'bg-success navbar-dark': type === 'default'}"
  >
    <!-- Search form -->
    <!-- <form class="navbar-search form-inline mr-sm-3"
          :class="{'navbar-search-light': type === 'default', 'navbar-search-dark': type === 'light'}"
          id="navbar-search-main">
      <div class="form-group mb-0">
        <div class="input-group input-group-alternative input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
          <input class="form-control" placeholder="Search" type="text">
        </div>
      </div>
      <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </form> -->
    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div class="pr-3 sidenav-toggler"
             :class="{active: $sidebar.showSidebar, 'sidenav-toggler-dark': type === 'default', 'sidenav-toggler-light': type === 'light'}"
             @click="toggleSidebar">
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>
      <li class="nav-item d-sm-none">
        <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
          <i class="ni ni-zoom-split-in"></i>
        </a>
      </li>
      <!-- <base-dropdown class="nav-item"
                     tag="li"
                     title-classes="nav-link"
                     title-tag="a"
                     icon="ni ni-bell-55"
                     menu-classes="dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden">
        <template>
          <div class="px-3 py-3">
            <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
          </div>
          <div class="list-group list-group-flush">
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <img alt="Image placeholder" src="img/theme/team-1.jpg" class="avatar rounded-circle">
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <img alt="Image placeholder" src="img/theme/team-2.jpg" class="avatar rounded-circle">
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <img alt="Image placeholder" src="img/theme/team-3.jpg" class="avatar rounded-circle">
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>5 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <img alt="Image placeholder" src="img/theme/team-4.jpg" class="avatar rounded-circle">
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <img alt="Image placeholder" src="img/theme/team-5.jpg" class="avatar rounded-circle">
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                </div>
              </div>
            </a>
          </div>
          <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
        </template>
      </base-dropdown> -->
      <!-- <base-dropdown menu-classes="dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right"
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     title-classes="nav-link"
                     icon="ni ni-ungroup">
        <template>
          <div class="row shortcuts px-4">
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i class="ni ni-calendar-grid-58"></i>
                    </span>
              <small>Calendar</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i class="ni ni-email-83"></i>
                    </span>
              <small>Email</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i class="ni ni-credit-card"></i>
                    </span>
              <small>Payments</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i class="ni ni-books"></i>
                    </span>
              <small>Reports</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-purple">
                      <i class="ni ni-pin-3"></i>
                    </span>
              <small>Maps</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-yellow">
                      <i class="ni ni-basket"></i>
                    </span>
              <small>Shop</small>
            </a>
          </div>
        </template>
      </base-dropdown> -->
    </ul>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown menu-on-right
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     title-classes="nav-link pr-0">
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle" v-if="getUsers.jenisKelamin == 'L'">
                    <img alt="Image placeholder" src="@/assets/img/user_p.png">
                  </span>
                  <span class="avatar avatar-sm rounded-circle" v-if="getUsers.jenisKelamin == 'P'">
                    <img alt="Image placeholder" src="@/assets/img/user_w.png">
                  </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">{{getUsers.username}}</span>
            </div>
          </div>
        </a>

        <template>

          <!-- <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </div> -->
          <router-link to="/profile" class="dropdown-item">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </router-link>
          <router-link to="/change_password" class="dropdown-item">
            <i class="ni ni-settings-gear-65"></i>
            <span>Change Password</span>
          </router-link>
          <!-- <a href="#!" class="dropdown-item">
            <i class="ni ni-calendar-grid-58"></i>
            <span>Activity</span>
          </a>
          <a href="#!" class="dropdown-item">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </a> -->
          <div class="dropdown-divider"></div>
          <!-- <a href="#" class="dropdown-item" @click="logout">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </a> -->
          <div class="dropdown-item" @click="logout">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </div>

        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
      // users: this.$store.getters.getUser,
      token: this.$store.getters.getToken
      // user: {}
    }
  },
  components: {
    CollapseTransition,
    BaseNav,
    Modal
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    getUsers(){
      return this.$store.state.users
    },
    // mapState(['users'])
  },
  created(){
    this.$store.dispatch('getUsers')
    // this.getTest()
    // .then(response => {
    //   this.users = response
    // })
    // .catch(error => {
    //   console.log(error);
      
    // })
    // this.getTest()
  },
  // mounted(){
    
  // },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push({name: 'login'})
      })  
    },
    // getTest(){
    //   console.log(this.users)
    // }
  }
};
</script>
