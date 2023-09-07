<template>
  <div class="container-fluid mt-4 p-0 pt-1 bg-dark">
    <div class="d-flex p-0">
      <textarea
        class="no-resize container-fluid fixed-textarea-height bg-dark text-white-50"
        :class="alignment"
        v-model="content"
        :style="{
          'font-family': selectedFont,
          'font-size': fontSize + 'px',
          'font-weight': fontWeight
        }"
        readonly
      ></textarea>
    </div>
  </div>

  <!-- Bottom Menu -->
  <div class="container-fluid d-flex fixed-bottom justify-content-between bg-dark p-2">
    <div class="container-fluid d-flex">
      <div class="dropup d-flex btn-group btn-group-lg">
        <!-- Selected Font box -->
        <a class="btn btn-lg btn-secondary text-truncate selected-font">
          {{ selectedFont }}
        </a>
        <!-- Font Dropdown Menu -->
        <div class="dropdown btn-group btn-group-lg">
          <button
            class="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <h6 class="dropdown-header">Fonts</h6>
            <div class="mb-3">
              <input
                type="text"
                v-model="searchTerm"
                class="form-control"
                placeholder="Search..."
              />
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

        <div class="btn-group btn-group-lg">
          <input
            name=""
            id=""
            class="btn btn-lg btn-secondary font-size-btn"
            type="number"
            v-model="fontSize"
          />
        </div>
        <button
          type="button"
          class="btn btn-secondary bi bi-type-bold"
          data-bs-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="applyBoldWeight"
        ></button>
      </div>
    </div>

    <!-- Alignment buttons -->
    <div class="container d-flex flex-row-reverse">
      <div class="d-flex justify-content-center">
        <div class="btn-group btn-group-lg" role="group">
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            @click="alignment = 'text-left'"
            id="btncheck1"
            :checked="alignment === 'text-left'"
            autocomplete="off"
          />
          <label class="btn btn-outline-secondary bi bi-text-left" for="btncheck1"></label>
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            @click="alignment = 'text-center'"
            id="btncheck2"
            :checked="alignment === 'text-center'"
            autocomplete="off"
          />
          <label class="btn btn-outline-secondary bi bi-text-center" for="btncheck2"></label>
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            @click="alignment = 'text-end'"
            :checked="alignment === 'text-end'"
            id="btncheck3"
            autocomplete="off"
          />
          <label class="btn btn-outline-secondary bi bi-text-right" for="btncheck3"></label>
        </div>
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
      fontSize: '30',
      fontWeight: '',
      fontWeightActive: false,
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
    },

    applyBoldWeight(){
      if (this.fontWeightActive){
        this.fontWeightActive = !this.fontWeightActive
        return this.fontWeight = ''
      }
      this.fontWeightActive = !this.fontWeightActive
      return this.fontWeight = 'bold'
    }
  }
}
</script>

<style>
.no-resize {
  resize: none;
}

.font-size-btn {
  width: 83px;
}

.fixed-textarea-height {
  height: 88vh;
  outline: none;
  border: none;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
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
