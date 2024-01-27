package com.coderower.hrmodule.models.auth;


import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.coderower.hrmodule.database.entities.User;
import com.coderower.hrmodule.security.Roles;
public class AuthUser  implements UserDetails {

	 private final User user;

		public AuthUser(User user) {
	        this.user = user;
	    }


	    @Override
	    public String getPassword() {
	        return user.getPassword();
	    }

	    @Override
	    public String getUsername() {
	        return user.getEmail();
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

	    @Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
	        return user.getRoles() != null ? mapRolesToAuthorities(user.getRoles()) : Collections.emptyList();
	    }

	    private Collection<SimpleGrantedAuthority> mapRolesToAuthorities(Collection<Roles> roles) {
	        return roles.stream()
	                .flatMap(r -> r.getPermissions().stream())
	                .map(permission -> new SimpleGrantedAuthority("ROLE_" + permission.name()))
	                .collect(Collectors.toList());
	    }
	  
}
