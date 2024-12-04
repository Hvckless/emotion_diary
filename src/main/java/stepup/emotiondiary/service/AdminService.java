package stepup.emotiondiary.service;

import stepup.emotiondiary.mapper.AdminMapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import stepup.emotiondiary.dto.AuthDTO;
import stepup.emotiondiary.dto.GenderDTO;

@Service
public class AdminService {
	@Autowired
	AdminMapper mapper;
	
	@Autowired
	GenderDTO genderDTO;
	
	@Autowired
	AuthDTO authDTO;
	
	public List<GenderDTO> getGenderTable(){
		
		return mapper.getGenderTable();
		
	}
	
	public List<AuthDTO> getAuthProviderTable(){
		return mapper.getAuthTable();
	}
}
