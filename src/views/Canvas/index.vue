<template>
  <div class="canvas-container">
    <LoadingSpinner v-if="loading !== false" />
    <template v-else>
<<<<<<< HEAD
<!--      <template class="opera-btn">-->
<!--        <v-navigation-drawer-->
<!--          absolute-->
<!--          right-->
<!--          hide-overlay-->
<!--          permanent-->
<!--          stateless-->
<!--          temporary-->
<!--          style="width: 200px"-->
<!--        >-->
<!--        </v-navigation-drawer>-->
<!--      </template>-->
=======
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
      <template class="ryu">
        <v-navigation-drawer
          v-model="showPanel"
          absolute
          right
          hide-overlay
          stateless
          temporary
          style="width: 500px"
        >
          <br />
<<<<<<< HEAD
          <v-card>
            <router-view />
          </v-card>

=======
          <v-card style="padding: 10px">
            <router-view />
          </v-card>
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
          <template #prepend>
            <ryu></ryu>
          </template>
          <template #append>
<<<<<<< HEAD
=======
            <hr />
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
            <v-btn
              :disabled="working"
              color="primary"
              class="ma-4"
              right
              @click.stop="showPanel = !showPanel"
<<<<<<< HEAD
              >CLOSE
            </v-btn>
          </template>
        </v-navigation-drawer>
      </template>
      <v-row style="height: 100%">
        <v-col cols="9">
          <v-card style="margin: 10px; height: 97%; border: 1px solid grey">
            <VisContainer ref="vis" @edit-item="editItem" />
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card style="margin-top: 10px; height: 97%; border: 1px solid grey">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  网络构建
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list-item>
                    <div class="topo-div">
                      <v-btn
                        :color="theme.edge.menu"
                        dark
                        title="Edge"
                        data-cy="fab-edge"
                        @click="$refs.vis.addEdge()"
                      >
                        <v-icon>$vuetify.icons.net-edge</v-icon>
                      </v-btn>
                      <p class="ma-0 font-weight-thin text-sm-body-2">Edge</p>
                    </div>
                    <div class="topo-div">
                      <v-btn
                        :color="theme.port.menu"
                        dark
                        title="Port"
                        data-cy="fab-port"
                        @click="$refs.vis.addPort()"
                      >
                        <v-icon>$vuetify.icons.net-port</v-icon>
                      </v-btn>
                      <p class="ma-0 font-weight-thin text-sm-body-2">Port</p>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="topo-div">
                      <v-btn
                        :color="theme.host.menu"
                        dark
                        title="Host"
                        data-cy="fab-host"
                        @click="$refs.vis.addHost()"
                      >
                        <v-icon>$vuetify.icons.net-host</v-icon>
                      </v-btn>
                      <p class="ma-0 font-weight-thin text-sm-body-2">Host</p>
                    </div>
                    <div class="topo-div">
                      <v-btn
                        :color="theme.switch.menu"
                        dark
                        title="Switch"
                        data-cy="fab-switch"
                        @click="$refs.vis.addSwitch()"
                      >
                        <v-icon>$vuetify.icons.net-switch</v-icon>
                      </v-btn>
                      <p class="ma-0 font-weight-thin text-sm-body-2">Switch</p>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="topo-div">
                      <v-btn
                        :color="theme.controller.menu"
                        dark
                        title="Controller"
                        data-cy="fab-controller; margin: 3px"
                        @click="$refs.vis.addController()"
                      >
                        <v-icon>$vuetify.icons.net-controller</v-icon>
                      </v-btn>
                      <p class="ma-0 font-weight-thin text-sm-body-2">Controller</p>
                    </div>
                    <div class="topo-div">
                      <v-btn
                        :color="theme.dummy.menu"
                        dark
                        title="Label"
                        data-cy="fab-dummy"
                        @click="$refs.vis.addDummy()"
                      >
                        <v-icon>$vuetify.icons.net-label</v-icon>
                      </v-btn>
                      <p class="ma-0 font-weight-thin text-sm-body-2">Label</p>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="topo-div">
                      <v-btn
                        dark
                        color="red"
                        title="Delete"
                        data-cy="fab-delete"
                        @click="$refs.vis.deleteSelected()"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                      <p class="ma-0 font-weight-thin text-sm-body-2">Delete</p>
                    </div>
                  </v-list-item>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  提交
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list-item>
                    <div class="topo-div">
                      <v-btn :disabled="working" color="primary" @click="downloadScript"
                      >SUBMIT
                      </v-btn>
                    </div>
                  </v-list-item>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

          </v-card>
        </v-col>
      </v-row>

      <Edit ref="edit" />
=======
              >CLOSE</v-btn
            >
          </template>
        </v-navigation-drawer>
      </template>
      <VisContainer ref="vis" @edit-item="editItem" />
      <Edit ref="edit" />
      <template class="opera-btn">
        <v-navigation-drawer
          absolute
          right
          hide-overlay
          stateless
          temporary
          permanent
          style="width: 200px"
        >
          <v-btn
            :color="theme.edge.menu"
            fab
            dark
            small
            title="Edge"
            data-cy="fab-edge"
            @click="$refs.vis.addEdge()"
          >
            <v-icon>$vuetify.icons.net-edge</v-icon>
          </v-btn>
          <v-btn
            :color="theme.port.menu"
            fab
            dark
            small
            title="Port"
            data-cy="fab-port"
            @click="$refs.vis.addPort()"
          >
            <v-icon>$vuetify.icons.net-port</v-icon>
          </v-btn>
          <v-btn
            :color="theme.host.menu"
            fab
            dark
            small
            title="Host"
            data-cy="fab-host"
            @click="$refs.vis.addHost()"
          >
            <v-icon>$vuetify.icons.net-host</v-icon>
          </v-btn>
          <v-btn
            :color="theme.switch.menu"
            fab
            dark
            small
            title="Switch"
            data-cy="fab-switch"
            @click="$refs.vis.addSwitch()"
          >
            <v-icon>$vuetify.icons.net-switch</v-icon>
          </v-btn>
          <v-btn
            :color="theme.controller.menu"
            fab
            dark
            small
            title="Controller"
            data-cy="fab-controller"
            @click="$refs.vis.addController()"
          >
            <v-icon>$vuetify.icons.net-controller</v-icon>
          </v-btn>
          <v-btn
            :color="theme.dummy.menu"
            fab
            dark
            small
            title="Label"
            data-cy="fab-dummy"
            @click="$refs.vis.addDummy()"
          >
            <v-icon>$vuetify.icons.net-label</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="red"
            title="Delete"
            data-cy="fab-delete"
            @click="$refs.vis.deleteSelected()"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-navigation-drawer>
      </template>
      <v-flex style="position: fixed; right: 100px; bottom: 10px">
        <v-btn :disabled="working" color="primary" @click="downloadScript"
          >SUBMIT</v-btn
        >
      </v-flex>
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
    </template>
  </div>
</template>

<script>
<<<<<<< HEAD
import LoadingSpinner from "@/components/LoadingSpinner";
import VisContainer from "@/components/VisContainer";
import Edit from "./components/Edit";
=======
import Edit from "@/components/Edit";
import LoadingSpinner from "@/components/LoadingSpinner";
import VisContainer from "@/components/VisContainer";
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
import { items as theme } from "@/utils/theme";
import exporter from "@/utils/exporter";
import Builder from "@/builder";
import { mapGetters } from "vuex";
<<<<<<< HEAD
import Ryu from "./components/Ryu";
=======
import Ryu from "@/views/Canvas/components/Ryu";
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b

function download(filename, mimeOrHref, data) {
  const href =
    mimeOrHref && data
      ? `data:${mimeOrHref},${encodeURIComponent(data)}`
      : mimeOrHref;

  const element = document.createElement("a");
  element.setAttribute("href", href);
  element.setAttribute("download", filename);
  element.style.display = "none";

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

export default {
  name: "CanvasPage",
  components: { Edit, LoadingSpinner, VisContainer, Ryu },
  data: () => ({
    showPanel: false,
    fab: false,
    theme,
  }),
  computed: {
    ...mapGetters("topology", ["data"]),
    working: {
      get() {
        return !!this.$store.state.working;
      },
      set(value) {
        if (value === true) {
          this.$store.commit("clearAlert");
        }
        this.$store.commit("setWorking", { working: value });
      },
    },
    loading() {
      return this.$store.state.loading;
    },
    isView() {
      return this.$route.meta.isView;
    },
  },
  methods: {
    showAlert(type, text) {
      this.$store.commit("setAlert", { type, text });
    },
    editItem(item, callback) {
      this.$refs.edit.edit(item, callback);
    },
    getFilename(extension) {
      return `${this.data.projectName || "mininet_network"}.${extension}`;
    },
    downloadScript() {
      this.showPanel = !this.showPanel;
<<<<<<< HEAD
      this.$emit("log", []);

      const builder = new Builder(exporter.exportData(this.data));
      this.$emit("log", builder.log);
      const script = builder.build();
      // this.showAlert("success", "Script built.");
      this.$axios({
        method: "POST",
        url: "http://192.168.194.130:1234/start_net",
        data: script,
        headers: {
          "Content-Type": "text/plain",
        },
      });
=======
      // try {
      //   this.working = true;
      //   const builder = new Builder(exporter.exportData(this.data));
      //   const script = builder.build();
      //   this.showAlert("success", "Script built.");
      //   download(this.getFilename("py"), "text/x-python;charset=utf-8", script);
      // } catch (error) {
      //   console.error(error);
      //   this.showAlert("error", "Script was not built.");
      // } finally {
      //   this.working = false;
      // }
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
    },
  },
};
</script>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  padding: 0px;
}

.invert-color {
  filter: invert(100%);
}

.v-btn--icon,
.v-btn--fab {
  margin: 10px;
}
<<<<<<< HEAD

.topo-div {
  text-align: center;
  width: 50%;
  margin: 3px;
}
=======
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
</style>
