package ma.enset.backend.repositories;

import ma.enset.backend.entities.Employee;
import ma.enset.backend.entities.Project;
import ma.enset.backend.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
    Employee findEmployeeByID(Long ID);
    @Query("select c from Employee c where c.employeeName like :kw")
    List<Employee> searchEmployee(@Param("kw") String keyword);
    List<Employee> findEmployeesByIDIn(List<Long> ids);

    @Query("SELECT e FROM Employee e INNER JOIN e.projects p WHERE p.id = :projectId")
    List<Employee> findEmployeesByProjectId(@Param("projectId") Long projectId);
}
