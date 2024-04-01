package kr.or.ddit.emp.pms.fxtrs.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import kr.or.ddit.enumpkg.ServiceResult;
import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.EmpVO;
import kr.or.ddit.global.vo.FxtrsRqstVO;
import kr.or.ddit.global.vo.FxtrsVO;
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

	@Override
	public String retrieveRqstNo() {
		String rqstNo = dao.selectRqstNo();
		return rqstNo;
	}
	
	@Override
	public EmpVO retrieveRqstEmp() {
		EmpVO fxRqstEmp = dao.selectRqstEmp();
		return fxRqstEmp;
	}

	@Override
	public FxtrsVO retrieveFxtrs(String fxCd) {
		FxtrsVO fxtrs = dao.selectFxtrs(fxCd);
		return fxtrs;
	}

	@Override
	public ServiceResult createFxtrsRqst(Map<String, Object> fxData) {
		ServiceResult result = null;
		
		int fxtrsRqstInsert = dao.insertFxtrsRqst(fxData); //비품 사용 insert
		
		if (fxtrsRqstInsert != 1) {
			throw new RuntimeException();
		} else {
			result = ServiceResult.OK;
		}
		return result;
	}

	@Override
	public ServiceResult createFxtrsRqstDtl(Map<String, Object> fxData) {
		ServiceResult result = null;
		
		int fxtrsRqstDtlInsert = dao.insertFxtrsRqstDtl(fxData); //비품 사용 insert
		
		if (fxtrsRqstDtlInsert != 1) {
			throw new RuntimeException();
		} else {
			result = ServiceResult.OK;
		}
		return result;
	}

	@Override
	public Map<String, Object> retrieveFxtrsRqst(String fxtrsRqstNo) {
		Map<String, Object> fxtrs = new HashMap<>();
		
		FxtrsRqstVO fxtrsRqst = dao.selectFxtrsRqst(fxtrsRqstNo);
		fxtrs.put("fxtrsRqst", fxtrsRqst);
		
		String empRqNo = fxtrsRqst.getEmpRqNo();
		String empRqNm = dao.selectEmpRqNm(empRqNo);
		fxtrs.put("empRqNm", empRqNm);
		
		return fxtrs;
	}

	@Override
	public ServiceResult updateFxtrsApproval(String fxRqstNo) {
		ServiceResult result = null;
		
		int approvalUpdate = dao.updateFxtrsApproval(fxRqstNo);
		
		if (approvalUpdate != 1) {
			throw new RuntimeException();
		} else {
			result = ServiceResult.OK;
		}
		return result;
	}

	@Override
	public ServiceResult updateFxtrsRecusal(String fxRqstNo) {
		ServiceResult result = null;
		
		int recusalUpdate = dao.updateFxtrsRecusal(fxRqstNo);
		
		if (recusalUpdate != 1) {
			throw new RuntimeException();
		} else {
			result = ServiceResult.OK;
		}
		return result;
	}



}
