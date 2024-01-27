package com.coderower.hrmodule.database.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.coderower.hrmodule.security.Roles;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection ="users")
public class User  implements UserDetails {

	
	  private String id ;
	    private String email;
	    private String password;
	    private List<Roles> roles; 

	    @Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
	        return roles != null ? mapRolesToAuthorities(roles) : Collections.emptyList();
	    }

	    @Override
	    public String getUsername() {
	        return email;
	    }

	    @Override
	    public String getPassword() {
	        return password;
	    }

	    @Override
	    public boolean isAccountNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isAccountNonLocked() {
	        return true;
	    }

	    @Override
	    public boolean isCredentialsNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isEnabled() {
	        return true;
	    }

	    private Collection<SimpleGrantedAuthority> mapRolesToAuthorities(Collection<Roles> roles) {
	        return roles.stream()
	                .flatMap(r -> r.getPermissions().stream())
	                .map(permission -> new SimpleGrantedAuthority("ROLE_" + permission.name()))
	                .collect(Collectors.toList());
	    }
	    
	    public void setRoles(List<Roles> roles) {
	        this.roles = roles;
	    }
	    
}