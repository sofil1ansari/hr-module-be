package com.coderower.hr-module.api.timeLog;

import com.coderower.hr-module.database.entities.TimeLog;
import com.coderower.hr-module.models.timeLog.TimeLogRequestModel;
import com.coderower.hr-module.services.timeLog.TimeLogService;
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
    public TimeLog find(@PathVariable String id ){
        return service.find(id);
    }

    @PostMapping("/")
    public TimeLog create(@RequestBody Product data){
        return service.create(data);
    }

    @PutMapping("/{id}")
    public TimeLog update(@PathVariable int id,@RequestBody Product data ){
        return service.update(id,data);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id ){

          service.delete(id);
    }
}