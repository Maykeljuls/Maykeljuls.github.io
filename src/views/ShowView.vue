<template>
  <div class="container-fluid mt-4">
    <div class="d-flex justify-content-center">
      <textarea
        class="form-control no-resize fixed-textarea-height fs-1"
        :class="alignment"
        v-model="content"
        :style="{
          'font-family': selectedFont
        }"
        readonly
      ></textarea>
    </div>
  </div>

  <!-- Bottom Menu -->
  <div class="container d-flex fixed-bottom justify-content-between mb-1">
    <div class="dropup d-flex btn-group">
      <!-- Selected Font box -->
      <a class="btn btn-secondary text-truncate selected-font">
        {{ selectedFont }}
      </a>

      <!-- Font Dropdown Menu -->
      <div class="dropdown btn-group">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        ></button>
        <div class="dropdown-menu" aria-labelledby="triggerId">
          <h6 class="dropdown-header">Fonts</h6>
          <div class="mb-3">
            <input type="text" v-model="searchTerm" class="form-control" placeholder="Search..." />
          </div>
          <div class="font-list overflow-auto">
            <a
              class="dropdown-item"
              v-for="font in filteredFonts"
              :key="font"
              :style="{
                'font-family': font
              }"
              @click="applyFont(font)"
              >{{ font }}</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Alignment buttons -->
    <div class="d-flex justify-content-center">
      <div class="btn-group" role="group">
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          @click="alignment = 'text-left'"
          id="btncheck1"
          :checked="alignment === 'text-left'"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btncheck1">Left</label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          @click="alignment = 'text-center'"
          id="btncheck2"
          :checked="alignment === 'text-center'"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btncheck2">Center</label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          @click="alignment = 'text-end'"
          :checked="alignment === 'text-end'"
          id="btncheck3"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btncheck3">Right</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alignment: 'text-center',
      selectedFont: 'Helvetica',
      searchTerm: '',
      fonts: [
        'Segoe UI',
        'Tahoma',
        'Geneva',
        'Verdana',
        'sans-serif',
        'Courier',
        'monospace',
        'Franklin Gothic Medium',
        'Arial Narrow',
        'Gill Sans',
        'Gill Sans MT',
        'Calibri',
        'Trebuchet MS',
        'Impact',
        'Haettenschweiler',
        'Cambria',
        'Cochin',
        'Georgia',
        'Times',
        'Times New Roman',
        'serif',
        'Helvetica'
      ]
    }
  },
  computed: {
    content() {
      return this.$route.query.content || ''
    },

    filteredFonts() {
      return this.fonts
        .filter((font) => font.toLowerCase().includes(this.searchTerm.toLowerCase()))
        .sort()
    }
  },
  methods: {
    applyFont(font) {
      console.log('Applied font: ' + font)
      this.selectedFont = font
    }
  }
}
</script>

<style>
.no-resize {
  resize: none;
}

.fixed-textarea-height {
  height: 90vh;
}

.font-list {
  max-height: 300px;
}

.selected-font {
  min-width: 100px;
  max-width: 100px;
  overflow: auto;
}
</style>
