import React, { useState } from "react";
import styles from "../../styles/components/tasks/CreateTaskForm.module.css";
import RadioGroup from "../common/RadioGroup";
import TaskColor from "../tasks/TaskColor";

export default function CreateTaskForm() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("blue");
  const [priority, setPriority] = useState("medium");
  const [visibility, setVisibility] = useState("campus");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [assignees, setAssignees] = useState([]);
  const [description, setDescription] = useState("");

  const colorOptions = [
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
  ];

  const priorityOptions = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const visibilityOptions = [
    { value: "campus", label: "Campus" },
    { value: "department", label: "Department" },
    { value: "personal", label: "Personal" },
  ];

  const addCollaborator = () => {
    const name = window.prompt("Enter collaborator name");
    if (name) setCollaborators((p) => [...p, name]);
  };

  const addAssignee = () => {
    const name = window.prompt("Enter assignee name");
    if (name) setAssignees((p) => [...p, name]);
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.titleInput}
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.sectionContent}>
        <div className={styles.section}>
          <div className={styles.row}>
            <div className={styles.col}>
              <label className={styles.label}>Task Color</label>
              <TaskColor
                value={color}
                onChange={(colorValue) => setColor(colorValue)}
              />
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>Label</div>
            <RadioGroup
            className={styles.labelGroup}
            optionsClassName={styles.labelOptions}
            radioLabelClassName={styles.labelRadio}
              name="label"
              options={priorityOptions}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <div className={styles.col}>
            <div className={styles.label}>Visibility</div>
            <RadioGroup
              name="visibility"
              optionsClassName={styles.visibilityOptions}
              radioLabelClassName={styles.visibilityRadio}
              className={styles.visibilityGroup}
              options={visibilityOptions}
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.scheduleSection}>
              <label className={styles.label}>Start Date</label>
              <input
                className={styles.dateInput}
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className={styles.scheduleSection}>
              <label className={styles.label}>End Date</label>
              <input
                className={styles.dateInput}
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.scheduleSection}>
              <label className={styles.label}>Start Time</label>
              <input
                className={styles.timeInput}
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className={styles.scheduleSection}>
              <label className={styles.label}>End Time</label>
              <input
                className={styles.timeInput}
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.col}>
              <label className={styles.label}>Collaborators</label>
              <div>
                <button
                  type="button"
                  onClick={addCollaborator}
                  className={styles.actionButton}
                >
                  Add Collaborator
                </button>
                {collaborators.map((c, i) => (
                  <div key={i}>{c}</div>
                ))}
              </div>
            </div>

            <div className={styles.col}>
              <label className={styles.label}>Assignees</label>
              <div>
                <button
                  type="button"
                  onClick={addAssignee}
                  className={styles.actionButton}
                >
                  Add Assignee
                </button>
                {assignees.map((a, i) => (
                  <div key={i}>{a}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className={styles.label}>Description</label>
            <textarea
              className={styles.descriptionInput}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
