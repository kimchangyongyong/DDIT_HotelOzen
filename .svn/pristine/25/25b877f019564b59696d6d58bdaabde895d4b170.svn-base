package kr.or.ddit.emp.pms.roomsvc.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.RmserviceOrderVO;
import kr.or.ddit.mybatis.mappers.EmpRmServiceOrderMapper;
import kr.or.ddit.mybatis.mappers.EmpRmServiceRqstMapper;

@Service
public class EmpPmsRmServiceListServiceImpl implements EmpPmsRmServiceListService {

	@Inject
	private EmpRmServiceOrderMapper ordao;
	
	@Inject
	private EmpRmServiceRqstMapper rqdao;
	
	@Override
	public List<RmserviceOrderVO> retieveRmServiceOrderList(PaginationInfo paging) {
		
		int totalRecod = ordao.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecod);
		
		List<RmserviceOrderVO> rmSOrderList = ordao.selectList(paging);
		return rmSOrderList;
	}

	@Override
	public List<RmserviceOrderVO> retieveRmServiceRqstList(PaginationInfo paging) {
		
		int totalRecod = rqdao.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecod);
		
		List<RmserviceOrderVO> rmSRqstList = rqdao.selectList(paging);
		
		return rmSRqstList;
	}

}
