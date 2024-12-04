package stepup.emotiondiary.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import stepup.emotiondiary.dto.AuthDTO;
import stepup.emotiondiary.dto.GenderDTO;

@Mapper
public interface AdminMapper {
	@Select("SELECT * FROM GENDER")
	public List<GenderDTO> getGenderTable();
	
	@Select("SELECT * FROM AUTH_PROVIDER")
	public List<AuthDTO> getAuthTable();
}
