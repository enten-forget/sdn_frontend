<template>
  <div class="canvas-container">
    <LoadingSpinner v-if="loading !== false" />
    <template v-else>
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
          <v-card style="padding: 10px">
            <router-view />
          </v-card>
          <template #prepend>
            <ryu></ryu>
          </template>
          <template #append>
            <hr />
            <v-btn
              :disabled="working"
              color="primary"
              class="ma-4"
              right
              @click.stop="showPanel = !showPanel"
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
    </template>
  </div>
</template>

<script>
import Edit from "@/components/Edit";
import LoadingSpinner from "@/components/LoadingSpinner";
import VisContainer from "@/components/VisContainer";
import { items as theme } from "@/utils/theme";
import exporter from "@/utils/exporter";
import Builder from "@/builder";
import { mapGetters } from "vuex";
import Ryu from "@/views/Canvas/components/Ryu";

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
</style>
