package stepup.emotiondiary.dto;

import org.springframework.stereotype.Component;

@Component
public class GenderDTO {
	private int gender_id;
	private String name;
	
	
	
	public int getGender_id() {
		return gender_id;
	}
	public void setGender_id(int gender_id) {
		this.gender_id = gender_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
