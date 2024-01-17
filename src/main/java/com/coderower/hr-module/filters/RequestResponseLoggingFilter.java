// https://stackoverflow.com/questions/681263/modify-httpservletrequest-body
// https://stackoverflow.com/questions/36739808/how-can-i-get-pathvariable-inside-filterregistrationbean-spring-boot
// https://stackoverflow.com/questions/1413129/modify-request-parameter-with-servlet-filter
package com.coderower.hr-module.filters;

import com.coderower.hr-module.database.entities.Product;
import com.coderower.hr-module.services.ProductService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;

@Component
@Order(2)
public class RequestResponseLoggingFilter  extends GenericFilterBean {

    @Autowired
    ProductService ps;
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//        if (getAuthentication() != null) {
//            MDC.put(MDC_KEY, getAuthentication().getName());
//        }

        Product p = ps.findProduct("string");
        try {
            request.setAttribute("test",p);
            chain.doFilter(request, response);
        } finally {
//            MDC.remove(MDC_KEY);
        }
    }

}