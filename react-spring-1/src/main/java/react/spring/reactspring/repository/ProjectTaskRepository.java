package react.spring.reactspring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import react.spring.reactspring.domain.ProjectTask;

import java.util.List;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
    ProjectTask getById(Long Id);
    List<ProjectTask> findByProjectIdentifierOrderByPriority(String projectIdentifier);
}
