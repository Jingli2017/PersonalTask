package react.spring.reactspring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import react.spring.reactspring.domain.Backlog;
import react.spring.reactspring.domain.ProjectTask;
import react.spring.reactspring.exceptions.ProjectIdException;
import react.spring.reactspring.repository.BacklogRepository;
import react.spring.reactspring.repository.ProjectTaskRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectTaskService {

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask, String projectIdentifier){

        try{
            // make sure the project belong to does exist
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
            // set the backlog for PT
            projectTask.setBacklog(backlog);
            // get the PT sequence
            Integer BacklogSequence = backlog.getPTSequence();
            //update the PT sequence
            BacklogSequence++;
            backlog.setPTSequence(BacklogSequence);
            // set the PT sequence
            projectTask.setProjectSequence(projectIdentifier+"-"+BacklogSequence);
            // set PT projectIdentifier
            projectTask.setProjectIdentifier(projectIdentifier);
            if(projectTask.getPriority()==null){
                projectTask.setPriority(3);
            }
            if(projectTask.getStatus()==null || projectTask.getStatus()==""){
                projectTask.setStatus("TO_DO");
            }
            return projectTaskRepository.save(projectTask);
        }catch (Exception e){
            throw new ProjectIdException("Project ID '" + projectIdentifier.toUpperCase() + "' Does not exist");
        }
    }

    public void delete(Long id){
        ProjectTask projectTask = findById(id);
        projectTaskRepository.delete(projectTask);
    }

    public Iterable<ProjectTask> findAll(){
        return projectTaskRepository.findAll();
    }

    public ProjectTask findById(Long Id){
        return projectTaskRepository.getById(Id);
    }

    public List<ProjectTask> findByBacklogId (String backlog_id) {
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
    }
}
