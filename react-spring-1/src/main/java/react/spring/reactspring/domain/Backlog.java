package react.spring.reactspring.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Integer PTSequence = 0;
    private String projectIdentifier;

    // one to one with project
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;

    // one to many with project tasks
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "backlog")
    private List<ProjectTask> projectTasks = new ArrayList<>();
    public Backlog () {
    }

    public List<ProjectTask> getProjectTasks () {
        return projectTasks;
    }

    public void setProjectTasks (List<ProjectTask> projectTasks) {
        this.projectTasks = projectTasks;
    }

    public Project getProject () {
        return project;
    }

    public void setProject (Project project) {
        this.project = project;
    }

    public long getId () {
        return id;
    }

    public void setId (long id) {
        this.id = id;
    }

    public Integer getPTSequence () {
        return PTSequence;
    }

    public void setPTSequence (Integer PTSequence) {
        this.PTSequence = PTSequence;
    }

    public String getProjectIdentifier () {
        return projectIdentifier;
    }

    public void setProjectIdentifier (String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
