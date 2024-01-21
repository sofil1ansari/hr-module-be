// https://stackoverflow.com/questions/681263/modify-httpservletrequest-body
// https://stackoverflow.com/questions/36739808/how-can-i-get-pathvariable-inside-filterregistrationbean-spring-boot
// https://stackoverflow.com/questions/1413129/modify-request-parameter-with-servlet-filter
package com.coderower.hrmodule.filters;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import com.coderower.hrmodule.database.entities.Project;
import com.coderower.hrmodule.services.project.ProjectService;

@Component
@Order(2)
public class RequestResponseLoggingFilter  extends GenericFilterBean {

	@Autowired
	ProjectService p;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
	    try {
	        request.setAttribute("test", p);
	        chain.doFilter(request, response);
	    } finally {
	        
	    }
	}


}