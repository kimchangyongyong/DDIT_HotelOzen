package kr.or.ddit.emp.hrm.emply.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import kr.or.ddit.enumpkg.ServiceResult;
import kr.or.ddit.global.vo.HrmEmpVO;
import kr.or.ddit.mybatis.mappers.HrmEmpMapper;


@Service
public class HrmEmpServiceImpl implements HrmEmpService {
	
	@Inject
	private HrmEmpMapper mapper;
	
	@Value("#{appInfo.empProfPath}")
	private Resource empProfPath;
	
	


	/**
	 * 단일 직원 계정 생성
	 */
	@Override
	public ServiceResult createHrmEmp(HrmEmpVO hrmEmp) {
//		LocalDate empBirth = (LocalDate)hrmEmp.getEmpBirth().format(DateTimeFormatter.ofPattern("YYYY/MM/DD"));
//		String empJncmpYmd = hrmEmp.getEmpJncmpYmd().format(DateTimeFormatter.ofPattern("YYYY/MM/DD"));
		int cnt = mapper.insert(hrmEmp);
		return cnt> 0 ? ServiceResult.OK : ServiceResult.FAIL;
	}

	/**
	 * 직원 정보 상세 조회
	 */
	@Override
	public HrmEmpVO retrieveHrmEmp(String empNo) {
		
		return mapper.select(empNo);
	}

	/**
	 * 전체 직원 목로 조회
	 */
	@Override
	public List<HrmEmpVO> retrieveHrmEmpList() {
		return mapper.selectList();
	}

	@Override
	public ServiceResult modifyHrmEmp(HrmEmpVO hrmEmp) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * 직원 퇴사자 처리, 직원 퇴사정보 칼럼을 변경하는 것이므로 UPDATE 쿼리 이용.
	 */
	@Override
	public ServiceResult removeHrmEmp(HrmEmpVO hrmEmp) {
		int cnt = mapper.delete(hrmEmp.getEmpNo());
		return cnt > 0 ? ServiceResult.OK : ServiceResult.FAIL;
	}

	/**
	 *	현재 출근한 직원 목록 조회
	 */
	@Override
	public List<HrmEmpVO> retrieveHrmEmpDclzList() {
		return mapper.selectDclzList();
	}

	/**
	 * 퇴사 처리된 직원 목록 조회
	 */
	@Override
	public List<HrmEmpVO> retrieveHrmEmpRtrmList() {
		return mapper.selectRtrmList();
	}

	@Override
	public String createHrmEmpNo() {
		return mapper.selectNewEmpNo();
	}

	

}
