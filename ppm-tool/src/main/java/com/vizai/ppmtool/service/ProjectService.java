package com.vizai.ppmtool.service;

import com.vizai.ppmtool.domain.Project;

public interface ProjectService {
    public Project saveOrUpdateProject(Project project);
    public Project findByProjectIdentifier(String projectId);
    public Iterable<Project> findAllProjects();
    public void deleteProjectByIdentifier(String projectId);
}
