import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, updateTask }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  useEffect(() => {
    if (editTask) {
      setFormData(editTask);
    }
  }, [editTask]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === '') {
      alert('Title is required');
      return;
    }

    if (editTask) {
      updateTask(formData);
    } else {
      addTask({ ...formData, id: Date.now().toString() });
    }

    setFormData({
      id: '',
      title: '',
      description: '',
      dueDate: '',
      status: 'Pending',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="date"
            name="dueDate"
            className="form-control"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-md-12">
          <textarea
            name="description"
            className="form-control"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-md-6">
          <select
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary w-100">
            {editTask ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
