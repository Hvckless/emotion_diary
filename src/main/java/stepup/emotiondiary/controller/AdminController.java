package stepup.emotiondiary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import stepup.emotiondiary.service.AdminService;

@Controller
public class AdminController {
	
	@Autowired
	AdminService service;
	
	@GetMapping(value="/admin")
	public String getAdminPage(Model model) {
		model.addAttribute("legend", service.getGenderTable());
		model.addAttribute("legeno", service.getAuthProviderTable());
		
		return "admin";
	}

}
