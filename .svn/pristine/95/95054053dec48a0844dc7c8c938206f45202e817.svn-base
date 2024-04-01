package kr.or.ddit.emp.pms.fxtrs.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.FxtrsVO;
import kr.or.ddit.mybatis.mappers.EmpFxtrsMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmpPmsFxtrsServiceImpl implements EmpPmsFxtrsService {

	private final EmpFxtrsMapper dao;
	
	@Override
	public List<FxtrsVO> retrieveFxtrsList(PaginationInfo paging) {
		
		int totalRecod = dao.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecod);
		
		List<FxtrsVO> fxtrsList = dao.selectList(paging);
		return fxtrsList;
	}

}
