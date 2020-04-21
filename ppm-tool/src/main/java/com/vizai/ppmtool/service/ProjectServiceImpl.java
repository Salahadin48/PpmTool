package com.vizai.ppmtool.service;

import com.vizai.ppmtool.domain.Project;
import com.vizai.ppmtool.exception.ProjectIdException;
import com.vizai.ppmtool.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProjectServiceImpl implements ProjectService{

    @Autowired ProjectRepository projectRepository;

    @Override
    public Project saveOrUpdateProject(Project project) {
        try{
            //project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }catch (Exception pex){
            throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists.");
        }
    }

    @Override
    public Project findByProjectIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if(project == null) throw new ProjectIdException("Project ID '"+projectId.toUpperCase()+"' doesn't exists.");
        return project;
    }

    @Override
    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public void deleteProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if(project == null) throw new ProjectIdException("Can't delete project with project ID '"+projectId.toUpperCase()+"'. Project doen't exist.");
        projectRepository.delete(project);
    }
}
