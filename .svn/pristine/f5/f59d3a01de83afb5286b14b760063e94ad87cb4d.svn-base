package kr.or.ddit.emp.pms.stay.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.ChkoutVO;
import kr.or.ddit.mybatis.mappers.EmpStayChkoutMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmpPmsStayCHkoutListServiceImpl implements EmpPmsStayChkoutListService {

	private final EmpStayChkoutMapper dao;
	
	@Override
	public List<ChkoutVO> retreieveChkoutList(PaginationInfo paging) {
		
		int totalRecod = dao.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecod);
		
		List<ChkoutVO> chkoutList = dao.selectList(paging);
		return chkoutList;
	}

}
