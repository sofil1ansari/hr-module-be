package com.coderower.hrmodule.api.timeLog;

import com.coderower.hrmodule.database.entities.TimeLog;
import com.coderower.hrmodule.database.repositories.TimeLogRepository;
import com.coderower.hrmodule.models.timeLog.TimeLogRequestModel;
import com.coderower.hrmodule.services.timeLog.TimeLogService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/tenant/6349367e2a89a447fdbd5f97/timelog")
@CrossOrigin("*")
public class TimeLogController {
	
    @Autowired
    private TimeLogService service;

    @Autowired
    private TimeLogRepository repository;

    @GetMapping("")
    public ResponseEntity<Object> findAndCountAll(HttpServletRequest request,
                                                 @ModelAttribute TimeLogRequestModel requestModel,
                                                  @RequestParam Optional<Integer> offset,
                                                  @RequestParam Optional<Integer> limit,
                                                  @RequestParam Optional<String> orderBy, @RequestParam(name = "filter[employee]", required = false) String filterEmployee) {
        int page = offset.orElse(0) / limit.orElse(10);

        Sort sort = orderBy.map(property -> property.isEmpty() ? Sort.unsorted() : Sort.by(Sort.Direction.ASC, property))
                .orElse(Sort.unsorted());

        Page<TimeLog> timelog;

        if (filterEmployee != null) {
            timelog = repository.findAndCountAllByEmployeeContainingIgnoreCase(filterEmployee, PageRequest.of(page, limit.orElse(10), sort));
        } else {

            timelog = service.findAndCountAll(PageRequest.of(page, limit.orElse(10), sort));
        }
        return ResponseEntity.ok(Map.of("rows", timelog.getContent(), "count", timelog.getTotalElements()));
    }

    @GetMapping("/{id}")
    public TimeLog find(@PathVariable String id) {
        return service.find(id);
    }

    @PostMapping("/")
    public TimeLog create(@RequestBody TimeLog data) {
        return service.create(data);
    }

    @PutMapping("/{id}")
    public TimeLog update(@PathVariable String id, @RequestBody TimeLog data) {
        return service.update(id, data);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }

//    @GetMapping("/autocomplete")
//    public List<TimeLog> autocomplete(@RequestParam String query) {
//       
//        return service.findAndCountAll(query);
//    }
}