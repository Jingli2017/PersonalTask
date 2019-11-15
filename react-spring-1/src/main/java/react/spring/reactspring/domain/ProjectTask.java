package react.spring.reactspring.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class ProjectTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(updatable = false)
    private  String projectSequence;
    private Integer priority;
    private Date dueDate;
    private Date createdAt;
    private Date updatedAt;
    // many to one with backlog
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinColumn(name="backlog_id", updatable = false, nullable = false)
    @JsonIgnore
    private Backlog backlog;


    @NotBlank(message = "summary can not be blank")
    private String summary;
    private String acceptanceCriteria;
    private String status;
    @Column(updatable = false)
    private String projectIdentifier;

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

    public ProjectTask () {
    }

    public Backlog getBacklog () {
        return backlog;
    }

    public void setBacklog (Backlog backlog) {
        this.backlog = backlog;
    }

    @Override
    public String toString () {
        return "ProjectTask{" +
                "id=" + id +
                ", projectSequence='" + projectSequence + '\'' +
                ", priority=" + priority +
                ", dueDate=" + dueDate +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", summary='" + summary + '\'' +
                ", acceptanceCriteria='" + acceptanceCriteria + '\'' +
                ", status='" + status + '\'' +
                ", projectIdentifier='" + projectIdentifier + '\'' +
                '}';
    }

    public String getProjectSequence () {
        return projectSequence;
    }

    public void setProjectSequence (String projectSequence) {
        this.projectSequence = projectSequence;
    }

    public Integer getPriority () {
        return priority;
    }

    public void setPriority (Integer priority) {
        this.priority = priority;
    }

    public Date getDueDate () {
        return dueDate;
    }

    public void setDueDate (Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getCreatedAt () {
        return createdAt;
    }

    public void setCreatedAt (Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt () {
        return updatedAt;
    }

    public void setUpdatedAt (Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getProjectIdentifier () {
        return projectIdentifier;
    }

    public void setProjectIdentifier (String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public long getId () {
        return id;
    }

    public void setId (long id) {
        this.id = id;
    }

    public String getSummary () {
        return summary;
    }

    public void setSummary (String summary) {
        this.summary = summary;
    }

    public String getAcceptanceCriteria () {
        return acceptanceCriteria;
    }

    public void setAcceptanceCriteria (String acceptanceCriteria) {
        this.acceptanceCriteria = acceptanceCriteria;
    }

    public String getStatus () {
        return status;
    }

    public void setStatus (String status) {
        this.status = status;
    }
}
