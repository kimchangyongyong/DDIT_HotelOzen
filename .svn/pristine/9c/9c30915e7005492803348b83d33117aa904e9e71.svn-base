package kr.or.ddit.emp.pbl.oprtnstts.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.AnnualVO;
import kr.or.ddit.global.vo.FxtrsRqstVO;

public interface EmpOprtnsttsService {

	/**
	 * 비품 업무현황
	 * @param empNo
	 * @param empRqNo
	 * @param empPurchsNo
	 * @return
	 */
	public List<FxtrsRqstVO> fxtrsStatusList(@Param("empNo") String empNo, PaginationInfo paging);
	
	/**
	 * 연차 업무현황
	 * @param empNo
	 * @param empRqNo
	 * @return
	 */
	public List<AnnualVO> annualStatusList(@Param("empNo") String empNo, PaginationInfo paging);
	
}
