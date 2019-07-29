package com.bolsadeideas.spring.backend.apirest.models.services;

import com.bolsadeideas.spring.backend.apirest.models.entity.Usuario;

public interface IUsuarioService {
	
	public Usuario findByUsername(String username);
	

}
