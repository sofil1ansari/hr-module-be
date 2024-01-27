package com.coderower.hrmodule.api.timeLog;

import com.coderower.hrmodule.database.entities.TimeLog;
import com.coderower.hrmodule.models.timeLog.TimeLogRequestModel;
import com.coderower.hrmodule.services.timeLog.TimeLogService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/timeLog")
public class TimeLogController {
    @Autowired
    private TimeLogService service;

    @GetMapping("")
    public List<TimeLog> findAndCountAll(HttpServletRequest request,
                                     @ModelAttribute TimeLogRequestModel requestModel,
                                     Optional<Integer> offset,
                                     Optional<Integer> limit,
                                     Optional <String> orderBy
                                     ) {
        return service.findAndCountAll();
    }

    @GetMapping("/{id}")
    public TimeLog findById(@PathVariable String id ){
        return service.findById(id);
    }

    @PostMapping("/add")
    public TimeLog createByTimeLog(@RequestBody TimeLog data){
        return service.createByTimeLog(data);
    }

    @PutMapping("/{id}")
    public TimeLog updateTimeLog(@PathVariable String id, @RequestBody TimeLog updatedTimeLog) {
        return service.updateTimeLog(id, updatedTimeLog);
    }

    @DeleteMapping("/{id}")
    public void deleteTimeLog(@PathVariable String id ){

          service.deleteTimeLog(id);
    }
    
    @GetMapping("/autocomplete")
    public List<TimeLog> autocomplete(@PathVariable String query ){
        return  service.findAndCountAll();
    }
}