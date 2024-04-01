package kr.or.ddit.emp.pos.refund.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.enumpkg.ServiceResult;
import kr.or.ddit.global.common.exception.PKNotFoundException;
import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.RefndVO;
import kr.or.ddit.mybatis.mappers.RefndMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmpPosRefndServiceImpl implements EmpPosRefndService {

	private final RefndMapper dao;
	
	@Override
	public RefndVO retrieveRefnd(String refndNo) {
		RefndVO refnd = dao.select(refndNo);
		if(refnd == null) {
			throw new PKNotFoundException(String.format("%s에 해당하는 사용자 없음",refndNo));
		}
		return refnd;
	}

	@Override
	public List<RefndVO> retrieveRefndList() {
		
		List<RefndVO> refndList = dao.selectList();
		
		return refndList;
	}

	@Override
	public ServiceResult ModifyRefnd(RefndVO refnd) {
		// TODO Auto-generated method stub
		return null;
	}

}
