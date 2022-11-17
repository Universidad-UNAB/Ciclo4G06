package com.unab.g06nosql.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.g06nosql.Collection.Personas;
import com.unab.g06nosql.IRepository.IPersonasRepository;
import com.unab.g06nosql.IService.IPersonasService;


@Service
public class PersonasService implements IPersonasService{

	@Autowired
	private IPersonasRepository repository;

	@Override
	public List<Personas> all() {	
		return repository.findAll();
	}

	@Override
	public Optional<Personas> findById(String id) {		
		return repository.findById(id);
	}

	@Override
	public Personas save(Personas personas) {		
		return repository.save(personas);
	}

	@Override
	public void delete(String id) {
		repository.deleteById(id);	
	}	
}