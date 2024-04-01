package kr.or.ddit.emp.pms.fxtrs.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.FxtrsUseVO;
import kr.or.ddit.mybatis.mappers.EmpFxtrsUseMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmpPmsFxtrsUseServiceImpl implements EmpPmsFxtrsUseService {

	private final EmpFxtrsUseMapper dao;
	
	@Override
	public List<FxtrsUseVO> retrieveFxtrsUseList(PaginationInfo paging) {
		
		int totalRecod = dao.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecod);
		
		List<FxtrsUseVO> fxtrsUseDtL = dao.selectList(paging);
		return fxtrsUseDtL;
		
	}

}
