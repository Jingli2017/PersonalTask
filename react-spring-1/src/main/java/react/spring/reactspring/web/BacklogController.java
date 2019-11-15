package react.spring.reactspring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import react.spring.reactspring.domain.ProjectTask;
import react.spring.reactspring.service.MapValidationErrorService;
import react.spring.reactspring.service.ProjectTaskService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addPTToBacklog(@Valid @RequestBody ProjectTask projectTask,
                                            BindingResult result, @PathVariable String backlog_id){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
        if (errorMap != null){
            return errorMap;
        }
        ProjectTask newProjectTask = projectTaskService.saveOrUpdateProjectTask(projectTask, backlog_id);
        return new ResponseEntity<ProjectTask>(newProjectTask, HttpStatus.CREATED);
    }

    @GetMapping("/{backlog_id}")
    public ResponseEntity<List<ProjectTask>> getProjectTaskByBacklogId(@PathVariable String backlog_id){
        return new ResponseEntity<List<ProjectTask>>(projectTaskService.findByBacklogId(backlog_id), HttpStatus.OK);
    }
}
