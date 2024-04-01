
package kr.or.ddit.mybatis.mappers;

import org.apache.ibatis.annotations.Mapper;

import kr.or.ddit.global.vo.EmpVO;

@Mapper
public interface EmpMapper extends AbstractCommonMapper<EmpVO, String>{
	
	public int changePwd(EmpVO empVO);
	
	public EmpVO selectEmpByUserName(String username);
	
	public EmpVO selectEmpDeptAndAnnual(String username);
	
	public EmpVO findEmpUser(EmpVO empVO);
	
}
