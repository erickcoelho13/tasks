package com.therealcoelho.service;

import com.therealcoelho.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);

}
