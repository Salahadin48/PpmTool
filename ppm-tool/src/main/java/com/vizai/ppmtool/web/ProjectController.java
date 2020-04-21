package com.vizai.ppmtool.web;

import com.vizai.ppmtool.domain.Project;
import com.vizai.ppmtool.service.ProjectService;
import com.vizai.ppmtool.service.ValidationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired ProjectService projectService;
    @Autowired
    ValidationServiceImpl validationService;

    // @PostMapping("") @PutMapping("")
    @RequestMapping(value = "", method = {RequestMethod.POST, RequestMethod.PUT})
    public ResponseEntity<?> createProject(@Valid @RequestBody Project input, BindingResult result){
        var errorMap = validationService.validate(result);
        if(errorMap != null) return errorMap;
        Project output = projectService.saveOrUpdateProject(input);
        return new ResponseEntity<Project>(output, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProject(@PathVariable String projectId){
        Project project = projectService.findByProjectIdentifier(projectId);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProjects(){
        Iterable<Project> project = projectService.findAllProjects();
        return new ResponseEntity<Iterable<Project>>(project, HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId){
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<String>("Project with ID '"+projectId.toUpperCase()+"' deleted successfully.", HttpStatus.OK);
    }
}
