<script>
export default {
  props: {
    task: Object,
  },
  computed: {
    editedTask: {
      get() {
        // Create a deep copy of the task for editing
        return { ...this.task };
      },
      set(value) {
        // Noop to satisfy Vue's two-way binding requirements
      },
    },
  },
  methods: {
    saveChanges() {
      // Emit an event with the updated task to save changes
      this.$emit('saveChanges', { ...this.editedTask });
      this.closeModal();
    },
    closeModal() {
      // Close the modal
      this.$emit('closeModal');
    },
  },
};
</script>

<template>
    <div class="task-modal" v-if="task">
      <div class="modal-content">
        <h2>Edit Task</h2>
        <label for="title">Titre:</label>
        <input v-model="editedTask.title" type="text" id="title" />
  
        <label for="description">Description:</label>
        <textarea v-model="editedTask.description" id="description"></textarea>
  
        <label for="completed">Status:</label>
        <select v-model="editedTask.status" id="status">
            <option value="new">Nouveau</option>
            <option value="ongoing">En cours</option>
            <option value="paused">En pause</option>
            <option value="canceled">Annulé</option>
            <option value="completed">Terminé</option>
        </select>
  
        <div class="modal-buttons">
          <button @click="saveChanges">Save Changes</button>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .task-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
  }
  
  .modal-content {
    background-color: #fff;
    width: 50%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input,
  textarea {
    min-width: 100%;
    padding: 8px;
    margin-bottom: 16px;
  }
  textarea {
    min-height: 200px;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: space-between;
  }
  </style>