package kr.or.ddit.cstmr.myinfo.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.mybatis.mappers.MberMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CstmrMyInfoServiceImpl implements CstmrMyInfoService {

	@Inject
	private final MberMapper dao;
	
	@Override
	public MberVO retrieveUser(String cstNo) {

		MberVO mber = dao.selectMypage(cstNo);
		
		MberVO couponList = dao.selectCouponCnt(cstNo);
		
		mber.setTotalCoupon(couponList.getTotalCoupon());
		mber.setAvailCoupon(couponList.getAvailCoupon());
		mber.setUnAvailCoupon(couponList.getUnAvailCoupon());
		mber.setUsedCoupon(couponList.getUsedCoupon());
		
		return mber;
	}

}
