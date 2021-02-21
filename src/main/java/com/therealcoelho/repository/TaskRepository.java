package com.therealcoelho.repository;

import com.therealcoelho.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {



}
