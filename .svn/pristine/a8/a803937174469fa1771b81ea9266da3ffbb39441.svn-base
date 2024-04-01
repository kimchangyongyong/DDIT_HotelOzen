package kr.or.ddit.emp.pms.stay.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.RsvtVO;
import kr.or.ddit.mybatis.mappers.EmpStayChkinMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmpPmsStayChkinLisServiceImpl implements EmpPmsStayChkinListService{
	
	private final EmpStayChkinMapper dao;
	
	@Override
	public List<RsvtVO> retrieveChkinList(PaginationInfo paging) {
		
		int totalRecod = dao.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecod);
		
		List<RsvtVO> chkinList = dao.selectList(paging);
		return chkinList;
	}

}
