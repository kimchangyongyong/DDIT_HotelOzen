package kr.or.ddit.emp.pms.fxtrs.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.EmpVO;
import kr.or.ddit.global.vo.FxtrsRqstVO;
import kr.or.ddit.mybatis.mappers.EmpFxtrsRqstMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmpPmsFxtrsRqstServiceImpl implements EmpPmsFxtrsRqstService {

	private final EmpFxtrsRqstMapper dao;
	
	@Override
	public List<FxtrsRqstVO> retrieveFxtrsRqstList(PaginationInfo paging) {
		List<FxtrsRqstVO> rqstList = dao.selectList(paging);
		for(int i = 0; i < rqstList.size(); i ++) {
			String empNo = rqstList.get(i).getEmpNo(); //요쳥자
			String empRqNo = rqstList.get(i).getEmpRqNo(); //요쳥결재자
			String empPurchsNo = rqstList.get(i).getEmpPurchsNo(); //구매결재자
			if (empNo != null || empRqNo != null || empPurchsNo != null){
	            FxtrsRqstVO rqstVO = rqstList.get(i);
	            if (empNo != null) {
	                FxtrsRqstVO empNm = dao.selectEmpName(empNo);
	                rqstVO.setEmpNm(empNm.getEmpNm());
	            }
	            if (empRqNo != null) {
	                FxtrsRqstVO empRqNm = dao.selectEmpName(empRqNo);
	                rqstVO.setEmpRqNm(empRqNm.getEmpNm());
	            }
	            if (empPurchsNo != null) {
	                FxtrsRqstVO empPurchsNm = dao.selectEmpName(empPurchsNo);
	                rqstVO.setEmpPurchsNm(empPurchsNm.getEmpNm());
	            }
	        }
		}
		return rqstList;
	}

}
