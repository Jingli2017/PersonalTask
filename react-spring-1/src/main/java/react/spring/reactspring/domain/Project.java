package react.spring.reactspring.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @NotBlank(message = "Project name is required")
    private String projectName;
    @NotBlank(message = "Project Identifier is required")
    @Size(min = 4, max = 5, message = "PLease use 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String projectIdentifier;
    @NotBlank(message = "Project description is required")
    private String description;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date startDate;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date endDate;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date createdAt;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date updatedAt;
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "project")
    private Backlog backlog;

    public Project () {
    }

    public Backlog getBacklog () {
        return backlog;
    }

    public void setBacklog (Backlog backlog) {
        this.backlog = backlog;
    }

    public void setId (Long id) {
        Id = id;
    }

    public void setProjectName (String projectName) {
        this.projectName = projectName;
    }

    public void setProjectIdentifier (String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public void setDescription (String description) {
        this.description = description;
    }

    public void setStartDate (Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate (Date endDate) {
        this.endDate = endDate;
    }

    public void setCreatedAt (Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt (Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Long getId () {
        return Id;
    }

    public String getProjectName () {
        return projectName;
    }

    public String getProjectIdentifier () {
        return projectIdentifier;
    }

    public String getDescription () {
        return description;
    }

    public Date getStartDate () {
        return startDate;
    }

    public Date getEndDate () {
        return endDate;
    }

    public Date getCreatedAt () {
        return createdAt;
    }

    public Date getUpdatedAt () {
        return updatedAt;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }


}
