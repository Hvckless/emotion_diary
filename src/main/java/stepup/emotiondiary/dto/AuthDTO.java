package stepup.emotiondiary.dto;

import org.springframework.stereotype.Component;

@Component
public class AuthDTO {
	private int auth_provider_id;
	private String name;
	
	
	
	public int getAuth_provider_id() {
		return auth_provider_id;
	}
	public void setAuth_provider_id(int auth_provider_id) {
		this.auth_provider_id = auth_provider_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
